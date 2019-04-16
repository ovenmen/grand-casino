import React from 'react'
import { object } from 'prop-types'

import fetchDataPage from '../utils/fetch-data-page'
import HeaderPage from '../components/header-page'
import Breadcrumbs from '../components/breadcrumbs'
import ReviewsForm from '../components/review-form'
import AllReviews from '../components/all-reviews'

const ReviewsPage = ({ data }) => {
    const { header, headerImage, breadcrumbs } = data
    const { reviewsForm, allReviews } = data.content

    return (
        <section>
            {breadcrumbs && <Breadcrumbs breadcrumbs={breadcrumbs} />}
            {header && headerImage && <HeaderPage header={header} image={headerImage} />}
            <div className="grid-x">
                <div className="cell small-12 medium-4 large-5">
                    {reviewsForm && <ReviewsForm {...reviewsForm} />}
                </div>
                <div className="cell small-12 medium-8 large-7">
                    {allReviews && <AllReviews {...allReviews} />}
                </div>
            </div>
        </section>
    )
}

ReviewsPage.getInitialProps = fetchDataPage('reviews')

ReviewsPage.propTypes = {
    data: object
}

export default ReviewsPage
