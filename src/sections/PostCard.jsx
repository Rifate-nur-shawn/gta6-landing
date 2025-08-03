

// const PostCard = () => {
//     const vidRef = React.useRef(null);
//     useGSAP(() => {
//         gsap.set('.post-card', { marginTop: '-80vh' });

//         gsap.timeline({
//             scrollTrigger: {
//                 trigger: '.post-card',
//                 start: 'top 80%',
//                 end: '10% center',
//                 scrub: 2,
//             }
//         }).to(vidRef.current, { opacity: 0, duration: 1, ease: 'power1.inOut' });

//         gsap.to('.post-card .post-card-wrapper', {
//             scrollTrigger: {
//                 trigger: '.post-card',
//                 start: 'top center',
//                 end: '80% center',
//                 scrub: 2
//             }, y: -200, duration: 1, ease: 'power1.inOut'
//         }, '<')
//     });
  import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react"

const PostCard = () => {
  const videoRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.post-card',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      }
    })

    videoRef.current.onloadedmetadata = () => {
      tl.to(videoRef.current, { currentTime: videoRef.current.duration, duration: 3, ease: 'power1.inOut' }, '<');
    }
  })

  return (
    <section className="post-card">
      <div className="animated-gradient-bg" />

      <div className="post-card-wrapper group hover:rotate-1 hover:-[1.02] transition duration-700">
        <img src="/images/overlay.webp" />

        <video 
          ref={videoRef}
          muted
          playsInline
          autoPlay
          loop
          preload="auto"
          src="/videos/postcard-vd.mp4"
        />

        <button className="group-hover:bg-yellow transation duration-700">
          Explore Leonida Keys
        </button>
      </div>
    </section>
  )
}

export default PostCard