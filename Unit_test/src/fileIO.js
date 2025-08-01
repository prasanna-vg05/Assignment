const fs = require('fs').promises;
const path = require('path');

async function writeFile(filePath, content) {
  try {
    await fs.mkdir(path.dirname(filePath), { recursive: true });
    await fs.writeFile(filePath, content, 'utf-8');
    return { success: true };
  } catch (error) {
    return { 
      success: false, 
      error: error.message 
    };
  }
}

async function readFile(filePath) {
  try {
    const content = await fs.readFile(filePath, 'utf-8');
    return { 
      success: true, 
      content 
    };
  } catch (error) {
    return { 
      success: false, 
      error: error.message 
    };
  }
}

module.exports = { writeFile, readFile };