const assert  = require('chai').assert
const { writeFile, readFile } = require('../src/fileIO')
const fs = require('fs').promises
const path = require('path')

describe('File I/O Operations', () => {
  const testDir = path.join(__dirname, 'test')
  const testFile = path.join(testDir, 'test.txt')
  const testContent = 'Hello, World!'

  before(async () => {
    try {
      await fs.rm(testDir, { recursive: true, force: true })
    } catch (err) {}
  })

  after(async () => {
    try {
      await fs.rm(testDir, { recursive: true, force: true })
    } catch (err) {}
  })

  describe('writeFile()', () => {
    it('should create and write to a new file', async () => {
      const result = await writeFile(testFile, testContent)
      assert.strictEqual(result.success, true)
      
      const stats = await fs.stat(testFile)
      assert(stats.isFile())
      
      const content = await fs.readFile(testFile, 'utf-8')
      assert.strictEqual(content, testContent)
    })

    it('should return error for invalid path', async () => {
      const invalidPath = '/invalid/path/test.txt'
      const result = await writeFile(invalidPath, 'test')
      assert.strictEqual(result.success, false)
    })
  })

  describe('readFile()', () => {
    beforeEach(async () => {
      await writeFile(testFile, testContent)
    })

    it('should read file content correctly', async () => {
      const result = await readFile(testFile)
      assert.strictEqual(result.success, true);
      assert.strictEqual(result.content, testContent)
    })

    it('should return error for non-existent file', async () => {
      const nonExistentFile = path.join(testDir, 'nonexistent.txt')
      const result = await readFile(nonExistentFile)
      assert.strictEqual(result.success, false)
      assert.match(result.error, /no such file or directory/i)
    })
  })

  describe('read/write integration', () => {
    it('should write and then read the same content', async () => {
      const newContent = 'Integration test content'
      
      const writeResult = await writeFile(testFile, newContent)
      assert.strictEqual(writeResult.success, true)
      

      const readResult = await readFile(testFile)
      assert.strictEqual(readResult.success, true)
      assert.strictEqual(readResult.content, newContent)
    })
  })
})