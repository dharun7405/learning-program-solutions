package com.pm;

import org.junit.jupiter.api.*;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;

import java.util.Collection;
import java.util.stream.Stream;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.api.DynamicTest.dynamicTest;

// Assumptions -> skip if false
public class MyTest {
    @Test
    void exampleTest() {
        boolean condition = "true".equalsIgnoreCase(System.getProperty("runTest"));
        Assumptions.assumeTrue(condition, "Skipping the test because the condition is not met");
        int result = someMethod();
        assertEquals(42, result, "The result should be 42");
    }

    private int someMethod() {
        return 42;
    }
}



// Parameterized Test
class MyParameterizedTest {
    @ParameterizedTest
    @ValueSource(ints = {1, 2, 3, 4, 5})
    void testSquare(int value) {
        int result = square(value);
        assertEquals(value * value, result, "Square calculation is incorrect");
    }

    private int square(int number) {
        return number * number;
    }
}



// Runtime testing
class MyDynamicTest {
    @TestFactory
    Collection<DynamicTest> dynamicTestsFromStream() {
        return generateTestCases().map(input ->
                dynamicTest("Test " + input, () -> assertTrue(input % 2 == 0))
        ).toList();
    }

    private Stream<Integer> generateTestCases() {
        return Stream.of(2, 4, 6, 8, 10);
    }
}


// Tagging and Filtering
class TaggedTests {

    @Test
    @Tag("fast")
    void fastTest() {
        assertTrue(true, "This is a fast test");
    }

    @Test
    @Tag("slow")
    void slowTest() {
        assertTrue(true, "This is a slow test");
    }

    @Test
    @Tag("fast")
    @Tag("integration")
    void fastIntegrationTest() {
        assertTrue(true, "This is a fast integration test");
    }
}



class MySingleTestClass {

    private int num1;
    private int num2;


    @BeforeAll
    static void setupBeforeAll() {
        System.out.println("Before all tests");
    }


    @AfterAll
    static void cleanupAfterAll() {
        System.out.println("After all tests");
    }


    @BeforeEach
    void setupBeforeEach() {
        System.out.println("Before each test");
        num1 = 2;
        num2 = 3;
    }


    @AfterEach
    void cleanupAfterEach() {
        System.out.println("After each test");
    }


    @Test
    void testAddTwoNumbers() {
        System.out.println("Adding two numbers");
        int result = num1 + num2;
        assertEquals(5, result, "the sum should be 5");
    }

    @Test
    void testAnotherMethod() {
        System.out.println("Another test method");

    }
}
