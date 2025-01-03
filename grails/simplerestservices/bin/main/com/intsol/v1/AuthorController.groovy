package com.intsol.v1


import grails.rest.*
import grails.converters.*

class AuthorController {
	static responseFormats = ['json', 'xml']

    static namespace = "v1"
	
    def index() { 
        return "v1"
    }
}
