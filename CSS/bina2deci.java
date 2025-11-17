public class bina2deci {

    public static void b2d(int binNum){
        int Mynum= binNum;
        int power=0;
        int decNum=0;
        while(binNum>0){
            int lastDigt = binNum % 10;
        decNum = decNum + (lastDigt * (int)Math.pow(2,power));
        power++;
       
    }
    System.out.println("decimal of "+Mynum+"="+decNum);

    }

    public static void d2b(int dNum){
        int mynum=dNum;
        int powr=0; 
        int bNum=0;
        while(dNum>0){
            int remain=dNum % 2;
            bNum = bNum +(remain * (int)Math.pow(10,powr));
            powr++;
        }
        System.out.println("binary of "+mynum+"="+bNum);
    }


    public static void main(String[] args) {
        b2d(001);
        d2b(7);
    }
    
}