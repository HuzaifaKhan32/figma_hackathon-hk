import React from 'react'

function PreFooter() {
    return (
        <footer className='mt-20 flex border-b py-4 px-4 sm:px-10 bg-[#FAFAFA] min-h-[70px] tracking-wide h-[8.5rem]'>
            <div className='flex flex-wrap items-center justify-between lg:gap-y-2 gap-y-4 gap-x-4 w-full max-w-[65.5rem] mx-auto max-md:flex-col max-md:items-start max-md:px-7'>
                <div className="left">
                    <h1 className='text-[#252B42] text-2xl font-bold'>Bandage</h1>
                </div>


                <div className='flex space-x-6 h-auto max-md:items-start'>
                    <div className="flex space-x-6 max-md:items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" className="cursor-pointer" viewBox="0 0 512 512">
                            <path fill="#03a9f4"
                                d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
                                data-original="#03a9f4" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" className="cursor-pointer" viewBox="0 0 512 512">
                            <path fill="#1877f2"
                                d="M512 256c0 127.78-93.62 233.69-216 252.89V330h59.65L367 256h-71v-48.02c0-20.25 9.92-39.98 41.72-39.98H370v-63s-29.3-5-57.31-5c-58.47 0-96.69 35.44-96.69 99.6V256h-65v74h65v178.89C93.62 489.69 0 383.78 0 256 0 114.62 114.62 0 256 0s256 114.62 256 256z"
                                data-original="#1877f2" />
                            <path fill="#fff"
                                d="M355.65 330 367 256h-71v-48.021c0-20.245 9.918-39.979 41.719-39.979H370v-63s-29.296-5-57.305-5C254.219 100 216 135.44 216 199.6V256h-65v74h65v178.889c13.034 2.045 26.392 3.111 40 3.111s26.966-1.066 40-3.111V330z"
                                data-original="#ffffff" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" className="cursor-pointer" viewBox="0 0 24 24">
                            <linearGradient id="a" x1="-37.106" x2="-26.555" y1="-72.705" y2="-84.047"
                                gradientTransform="matrix(0 -1.98 -1.84 0 -132.522 -51.077)" gradientUnits="userSpaceOnUse">
                                <stop offset="0" stopColor="#fd5" />
                                <stop offset=".5" stopColor="#ff543e" />
                                <stop offset="1" stopColor="#c837ab" />
                            </linearGradient>
                            <path fill="url(#a)"
                                d="M1.5 1.633C-.386 3.592 0 5.673 0 11.995c0 5.25-.916 10.513 3.878 11.752 1.497.385 14.761.385 16.256-.002 1.996-.515 3.62-2.134 3.842-4.957.031-.394.031-13.185-.001-13.587-.236-3.007-2.087-4.74-4.526-5.091C18.89.029 18.778.005 15.91 0 5.737.005 3.507-.448 1.5 1.633z"
                                data-original="url(#a)" />
                            <path fill="#fff"
                                d="M11.998 3.139c-3.631 0-7.079-.323-8.396 3.057-.544 1.396-.465 3.209-.465 5.805 0 2.278-.073 4.419.465 5.804 1.314 3.382 4.79 3.058 8.394 3.058 3.477 0 7.062.362 8.395-3.058.545-1.41.465-3.196.465-5.804 0-3.462.191-5.697-1.488-7.375-1.7-1.7-3.999-1.487-7.374-1.487zm-.794 1.597c7.574-.012 8.538-.854 8.006 10.843-.189 4.137-3.339 3.683-7.211 3.683-7.06 0-7.263-.202-7.263-7.265 0-7.145.56-7.257 6.468-7.263zm5.524 1.471a1.063 1.063 0 1 0 0 2.126 1.063 1.063 0 0 0 0-2.126zm-4.73 1.243a4.55 4.55 0 1 0 .001 9.101 4.55 4.55 0 0 0-.001-9.101zm0 1.597c3.905 0 3.91 5.908 0 5.908-3.904 0-3.91-5.908 0-5.908z"
                                data-original="#ffffff" />
                        </svg>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default PreFooter