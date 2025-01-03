package com.intsol

import grails.testing.gorm.DomainUnitTest
import spock.lang.Specification

class ProductSpec extends Specification implements DomainUnitTest<Product> {

    def setup() {
    }

    def cleanup() {
    }

    void 'test domain class validation'() {
        when: 'A domain class is saved with invalid data'
        Product product = new Product(name: '', price: -2.0d)
        product.save()

        then: 'There were errors and the data was not saved'
        product.hasErrors()
        product.errors.getFieldError('price')
        product.errors.getFieldError('name')
        Product.count() == 0
    }

    void 'test domain class validation 2'() {
        when: 'A valid domain is saved'
        Product product = new Product()

        product.name = 'Banana'
        product.price = 2.15d
        product.description = "A Simple Product"
        product.save()

        then: 'The product was saved successfully'
        Product.count() == 1
        Product.first().price == 2.15d
    }

}
