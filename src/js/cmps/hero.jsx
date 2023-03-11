import { CustomBtn } from './custom-btn'
import { SkillsShpere } from './skills-shpere'

export function Hero() {
    return (
        <section className='main-layout full hero'>
            <div className='intro-wrapper'>
                <h1>
                    Hi,
                    <br />
                    I’m
                    <div className='name-wrapper'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            zoomAndPan='magnify'
                            viewBox='0 0 375 374.999991'
                            preserveAspectRatio='xMidYMid meet'
                            version='1.0'
                        >
                            <defs>
                                <clipPath id='91f7256336'>
                                    <path
                                        d='M 95.957031 70.515625 L 278.957031 70.515625 L 278.957031 304.515625 L 95.957031 304.515625 Z M 95.957031 70.515625 '
                                        clip-rule='nonzero'
                                    />
                                </clipPath>
                            </defs>
                            <g clip-path='url(#91f7256336)'>
                                <path
                                    fill='#08fdd8'
                                    d='M 208.933594 152.453125 L 165.976562 152.453125 L 165.976562 93.214844 L 143.425781 70.644531 L 95.957031 70.644531 L 95.957031 281.816406 L 118.515625 304.382812 L 165.976562 304.382812 L 165.976562 222.519531 L 208.933594 222.496094 L 208.933594 281.816406 L 231.488281 304.382812 L 278.957031 304.382812 L 278.957031 93.214844 L 256.40625 70.644531 L 208.9375 70.644531 L 208.9375 152.453125 Z M 143.425781 74.792969 L 163.046875 94.421875 L 163.046875 152.453125 L 143.425781 152.453125 Z M 163.042969 299.371094 L 143.421875 279.742188 L 143.421875 202.03125 L 163.042969 221.664062 Z M 256.40625 74.792969 L 276.027344 94.421875 L 276.027344 299.371094 L 256.40625 279.738281 Z M 211.867188 73.570312 L 253.472656 73.570312 L 253.472656 278.882812 L 211.867188 278.882812 L 211.867188 197.023438 L 140.488281 197.023438 L 140.488281 278.882812 L 98.890625 278.882812 L 98.890625 73.570312 L 140.492188 73.570312 L 140.492188 155.375 L 211.867188 155.375 Z M 135.277344 78.789062 L 104.097656 78.789062 L 104.097656 273.664062 L 135.277344 273.664062 L 135.277344 191.816406 L 217.074219 191.816406 L 217.074219 273.664062 L 248.257812 273.664062 L 248.257812 78.789062 L 217.074219 78.789062 L 217.074219 160.605469 L 135.277344 160.605469 Z M 135.441406 166.792969 L 223.261719 166.792969 L 223.261719 84.976562 L 245.324219 84.976562 L 245.324219 270.730469 L 223.261719 270.730469 L 223.261719 191.96875 L 220.007812 188.882812 L 132.34375 188.882812 L 132.34375 270.730469 L 110.289062 270.730469 L 110.289062 84.976562 L 132.347656 84.976562 L 132.347656 163.535156 Z M 135.441406 166.792969 '
                                    fill-opacity='1'
                                    fill-rule='nonzero'
                                />
                            </g>
                        </svg>
                        arel
                    </div>
                    {/* <br /> */}
                    {/* web developer */}
                </h1>
                <p className='sub-txt'>full stack developer</p>
                <h3>Dedicated to creating cutting-edge web solutions</h3>

                <CustomBtn href={'#contact'} txt={'Contact me!'} />
            </div>
            <SkillsShpere />
        </section>
    )
}
