import React from 'react'

import fetchDataPage from '../utils/fetch-data-page'
import HeaderPage from '../components/header-page'
import Breadcrumbs from '../components/breadcrumbs'
import ReviewsForm from '../components/review-form'
import AllReviews from '../components/all-reviews'

const ReviewsPage = (props, {...breadcrumbs}) => (
    <section>
        {breadcrumbs && <Breadcrumbs {...props} />}
        <HeaderPage {...props} />
        <div className="grid-x">
            <div className="cell small-12 medium-4 large-5">
                <ReviewsForm {...props} />
            </div>
            <div className="cell small-12 medium-8 large-7">
                <AllReviews {...props} />
            </div>
        </div>
    </section>
)

export const getStaticProps = fetchDataPage('reviews')

export default ReviewsPage
