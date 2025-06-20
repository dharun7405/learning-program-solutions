public class Main {
    public static void main(String[] args) {
        double presentValue = 20000;
        double growthRate = 0.07;        
        int years = 10;

        double futureValue = FinancialForecaster.predictFutureValue(presentValue, growthRate, years);
        System.out.printf("Future value after %d years: ₹%.2f%n", years, futureValue);
    }
}
