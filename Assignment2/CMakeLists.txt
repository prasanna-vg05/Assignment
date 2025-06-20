cmake_minimum_required(VERSION 3.10)

project(MyCppProject CXX)

set(SOURCE_FILES
    main.cpp
    hello.cpp
    factorial.cpp
)

add_executable(my_program ${SOURCE_FILES})

target_compile_features(my_program PUBLIC cxx_std_11)
