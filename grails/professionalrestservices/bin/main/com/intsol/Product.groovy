package com.intsol

class Product {

    String name
    Double price
    String description

    static constraints = {
        name blank:false
        price range:0.1..1000.00
    }

}
