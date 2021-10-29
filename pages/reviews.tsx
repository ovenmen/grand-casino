import React, { FC } from 'react'
import { GetServerSideProps } from 'next'
import dynamic from 'next/dynamic'

import clientPromise from '../lib/mongodb'
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import Breadcrumbs from '../components/breadcrumbs'
import HeaderPage from '../components/header-page'
import AllReviews from '../components/all-reviews'
import ReviewsForm from '../components/review-form'

interface IReviewsProps {
    resolvedUrl: string,
    header: string,
    headerImage: string,
    navigation: {
        items: [
            {
                title: string,
                value: string,
                submenu?: [
                   {
                       title: string,
                       value: string
                   }
                ]
            }
        ]
    },
    logo: string,
    breadcrumbs: [
        {
            active: boolean,
            title: string,
            value: string
        }
    ],
    reviews: {
        header: string,
        emptyReviewsMessage: string,
        actionReviewsMessage: string,
        items: [
            {
                image: string,
                fullname: string,
                city: string,
                date: string,
                description: string
            }
        ]

    },
    reviewsForm: {
        header: string,
        fields: [
            {
                name: string,
                type: string,
                placeholder: string
            },
            {
                name: string,
                type: string,
                placeholder: string
            },
            {
                name: string,
                type: string,
                placeholder: string
            },
            {
                name: string,
                type: string,
                placeholder: string
            }
        ],
        submitButtonTitle: string
    },
    footer: {
        description: string,
        address: string,
        operationMode: string,
        email: string,
        phone: string,
        copirated: string
    }
}

const ScrollerDynamic = dynamic(() => import('../components/scroller'), {
    ssr: false
})

const Reviews: FC<IReviewsProps> = ({
    resolvedUrl,
    header,
    headerImage,
    logo,
    navigation,
    footer,
    breadcrumbs,
    reviews,
    reviewsForm
}) => (
    <>
        {navigation && (
            <Navigation
                navigation={navigation}
                logo={logo}
                resolvedUrl={resolvedUrl}
            />
        )}
        {breadcrumbs && (
            <Breadcrumbs
                breadcrumbs={breadcrumbs}
            />
        )}
        {header && (
            <HeaderPage
                header={header}
                headerImage={headerImage}
            />
        )}
        <div className="grid-x">
            <div className="cell small-12 medium-4 large-5">
                {reviewsForm && (
                    <ReviewsForm
                        reviewsForm={reviewsForm}
                    />
                )}
            </div>
            <div className="cell small-12 medium-8 large-7">
                {reviews && (
                    <AllReviews
                        reviews={reviews}
                    />
                )}
            </div>
        </div>
        {footer && (
            <Footer
                footer={footer}
                logo={logo}
                navigation={navigation}
            />
        )}
        <ScrollerDynamic />
    </>
)

export const getServerSideProps: GetServerSideProps = async ({ resolvedUrl }) => {
    const client = await clientPromise

    // client.db() will be the default database passed in the MONGODB_URI
    // You can change the database by calling the client.db() function and specifying a database like:
    // const db = client.db("myDatabase");
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands

    const db = client.db()

    let data

    try {
        data = {
            page: await db.collection('pages').findOne({ pageId: 'reviews' }),
            logo: await db.collection('components').findOne({ componentId: 'logo' }),
            navigation: await db.collection('components').findOne({ componentId: 'navigation' }),
            contacts: await db.collection('components').findOne({ componentId: 'contacts' }),
            reviews: await db.collection('reviews').find({ show: true }).toArray(),
            footer: await db.collection('components').findOne({ componentId: 'footer' })
        }
    } catch (error) {
        throw new Error('Неудалось получить данные!')
    }

    data = {
        page: JSON.parse(JSON.stringify(data.page)),
        logo: JSON.parse(JSON.stringify(data.logo)),
        navigation: JSON.parse(JSON.stringify(data.navigation)),
        contacts: JSON.parse(JSON.stringify(data.contacts)),
        reviews: JSON.parse(JSON.stringify(data.reviews)),
        footer: JSON.parse(JSON.stringify(data.footer))
    }

    return {
        props: {
            resolvedUrl,
            title: data.page.title,
            description: data.page.description,
            keywords: data.page.keywords,
            logo: data.logo.title,
            header: data.page.header,
            headerImage: data.page.headerImage,
            breadcrumbs: data.page.breadcrumbs,
            navigation: data.navigation,
            reviews: { header: data.page.reviews.header, items: data.reviews },
            reviewsForm: data.page.reviewsForm,
            footer: {
                description: data.footer.description,
                copirated: data.footer.copirated,
                address: data.contacts.address,
                operationMode: data.contacts.operationMode,
                email: data.contacts.email,
                phone: data.contacts.phone,
                navigation: data.navigation
            }
        }
    }
}

export default Reviews