import dynamic from 'next/dynamic'

const ScrollerDynamic = dynamic(() => import('../components/scroller'), {
    ssr: false
})

export default ScrollerDynamic