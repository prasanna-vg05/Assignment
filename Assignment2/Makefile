CXX = g++

CXXFLAGS = -Wall -Wextra -std=c++11

SRCS = main.cpp hello.cpp factorial.cpp

OBJS = $(SRCS:.cpp=.o)

TARGET = my_program

.PHONY: all clean

all: $(TARGET)

$(TARGET): $(OBJS)
	$(CXX) $(OBJS) -o $(TARGET)

%.o: %.cpp functions.h
	$(CXX) $(CXXFLAGS) -c $< -o $@

clean:
	rm -f $(OBJS) $(TARGET)
