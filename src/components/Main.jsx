import React from 'react'


function Main() {
    return (
        <main className='w-screen'>
            <section className='bg-gray'>
                <h2 className='text-center font-bold py-6'>Presentation</h2>
                <div className='flex flex-col gap-6 w-full justify-center items-center md:flex-row'>
                    <article className='bg-white w-full md:w-[30%] p-4'>
                        <h3>French</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </article>
                    <article className='bg-white w-full md:w-[30%] p-4'>
                        <h3>English</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </article>
                    <article className='bg-white w-full md:w-[30%] p-4'>
                        <h3>Chinese</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </article>
                </div>
            </section>
            <section className='bg-red'>
                <h2 className='text-center font-bold py-6'>Testimony</h2>
                <div className='flex flex-col gap-6 w-full justify-center items-center md:flex-row'>
                    <article className='bg-white w-full md:w-[30%] p-4'>
                        <h3>French</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </article>
                    <article className='bg-white w-full md:w-[30%] p-4'>
                        <h3>English</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </article>
                    <article className='bg-white w-full md:w-[30%] p-4'>
                        <h3>Chinese</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </article>
                </div>
            </section>
            <section className='bg-blue'>
                <h2 className='text-center font-bold py-6'>Review</h2>
                <form className='flex flex-col w-full justify-center px-20 gap-1 bg-gray'>
                    <label htmlFor="">Contact name</label>
                    <input type="text" className='w-[50%]' />
                    <label htmlFor="">Email</label>
                    <input type="text" className='w-[50%]' />
                    <label htmlFor="">Message</label>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    <button className='bg-red w-[30%] my-2'>Send</button>
                </form>
            </section>
        </main>
    )
}

export default Main