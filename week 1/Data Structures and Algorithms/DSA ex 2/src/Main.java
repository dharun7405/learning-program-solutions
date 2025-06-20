public class Main {
    public static void main(String[] args) {
        Product[] products = {
                new Product(101, "Laptop", "Electronics"),
                new Product(102, "Shirt", "Fashion"),
                new Product(103, "Book", "Education"),
                new Product(104, "Phone", "Electronics"),
                new Product(105, "Shoes", "Fashion")
        };

        // Linear search test
        System.out.println("Linear Search: 'Book'");
        Product result1 = ProductSearch.linearSearch(products, "Book");
        System.out.println(result1 != null ? result1 : "Product not found");

        ProductSearch.sortByName(products);

        // Binary search test
        System.out.println("\nBinary Search: 'Book'");
        Product result2 = ProductSearch.binarySearch(products, "Book");
        System.out.println(result2 != null ? result2 : "Product not found");
    }
}
