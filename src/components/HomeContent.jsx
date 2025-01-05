import Tag from './Tag';

function HomeContent() {
    return (
        <div>
            <Tag />
            <h1 className='font-semibold text-4xl text-neutral-100 leading-tight tracking-tight my-8'>
                Product Designer creating thoughtful, intuitive interfaces.
            </h1>
            <p className='text-base leading-relaxed text-neutral-300'>
                I’m Dale, a UK based product designer with over ten years of experience. I specialise in interface design for
                mobile and web-based applications with a focus on simplicity & usability. <br /> <br /> I’m currently working at
                WP Engine where I design some of the best products for WordPress including Advanced Custom Fields, WP Migrate and
                WP Offload Media. <br /> <br /> Before WP Engine, I worked at BaseKit where I helped shape the future of website
                builders and tools to help small businesses thrive online. In my spare time I also work on projects like Design
                Vault and Good Aesthetic Club.
            </p>
        </div>
    );
}

export default HomeContent;
