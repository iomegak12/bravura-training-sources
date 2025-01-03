package com.intsol

import grails.rest.*

@Resource(uri='/books', formats=["json"], readOnly=true)
class Book {

    String title
    String author
    String publisher

    static constraints = {
        title blank:false
        author blank:false
    }

}
