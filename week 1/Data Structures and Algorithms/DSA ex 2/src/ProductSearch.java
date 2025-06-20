import java.util.Arrays;
import java.util.Comparator;

public class ProductSearch {
    // Linear Search by productName
    public static Product linearSearch(Product[] products, String name) {
        for (Product p : products) {
            if (p.getProductName().equalsIgnoreCase(name)) {
                return p;
            }
        }
        return null;
    }

    // Binary Search by productName
    public static Product binarySearch(Product[] products, String name) {
        int left = 0;
        int right = products.length - 1;

        while (left <= right) {
            int mid = (left + right) / 2;
            int compare = name.compareToIgnoreCase(products[mid].getProductName());

            if (compare == 0) return products[mid];
            else if (compare < 0) right = mid - 1;
            else left = mid + 1;
        }
        return null;
    }

    public static void sortByName(Product[] products) {
        Arrays.sort(products, Comparator.comparing(Product::getProductName, String.CASE_INSENSITIVE_ORDER));
    }
}
