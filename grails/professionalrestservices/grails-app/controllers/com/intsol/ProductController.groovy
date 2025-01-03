package com.intsol


import grails.rest.*
import grails.converters.*

import groovy.transform.CompileStatic

@CompileStatic
class ProductController extends RestfulController {
	static responseFormats = ['json', 'xml']

    ProductService productService

    ProductController() {
        super(Product)
    }
	
    def search(String q, Integer max ) { 
        if (q) {
            respond productService.findByNameLike("%${q}%".toString(), [max: Math.min( max ?: 10, 100)]) // <3>
        }
        else {
            respond([]) 
        }
    }
}
