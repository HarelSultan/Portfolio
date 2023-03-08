export const CustomBtn = ({ href, txt, target = '' }) => {
    return (
        <div className='custom-btn'>
            <a target={target} href={href} className='flat-button'>
                <div>
                    <span className='bg'></span>
                    <span className='base'></span>
                    <span className='text'>{txt}</span>
                </div>
            </a>
        </div>
    )
}
