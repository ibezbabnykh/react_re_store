import React from 'react';

import { BookstoreServiceConsumer } from '../components/bookstore-service-context';

const withBookstoreService = () => (Wrraped) => {
    return (props) => {
        return (
            <BookstoreServiceConsumer>
                {
                    (bookstoreService) => {
                        return <Wrraped {...props} bookstoreService={bookstoreService}/>
                    }
                }
            </BookstoreServiceConsumer>
        );
    }
}

export default withBookstoreService;