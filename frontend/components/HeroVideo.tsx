import Image from 'next/image';

export const HeroVideo = () => {
    return (
        <div className="relative w-[800px] h-[400px] mx-auto"> {/* Centered with custom size */}
            <Image 
                src="https://res.cloudinary.com/zapier-media/image/upload/q_auto/f_auto/v1726210651/Homepage%20%E2%80%94%20Sept%202024/homepage-hero_vvpkmi.png"
                alt="Zapier hero image"
                fill
                priority
                style={{ objectFit: 'contain' }} // Or 'cover' or 'scale-down'
            />
        </div>
    )
}
