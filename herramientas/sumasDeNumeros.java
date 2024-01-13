import java.util.Scanner;

public class sumasDeNumeros {
    public static void main(String[] args) {
        
        Scanner scanner = new Scanner(System.in);

        try {
            System.out.print("Ingrese un número: ");
            int numeroIngresado = scanner.nextInt();

            int suma = 0;
            for (int i = 1; i <= numeroIngresado; i++) {
                suma += i;
            }

            StringBuilder expresionMatematica = new StringBuilder();

            for (int i = 1; i <= numeroIngresado; i++) {
                expresionMatematica.append(i);
                if (i < numeroIngresado) {
                    expresionMatematica.append(" + ");
                }
            }

            System.out.println("La suma de los números del 1 al " + numeroIngresado + " es: " + suma);
            System.out.println("Expresión matemática: " + expresionMatematica.toString());
        } finally {
            scanner.close();
        }
    }
}
