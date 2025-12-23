import "./Hero.css"

export default function Hero() {
    return <>
        <section className="hero">
            <h1>
                Build Your Career in <span>Web Development</span>
            </h1>

            <p>
                Learn real-world skills, work on live projects, and gain experience
                that makes you job-ready.
            </p>

            <div className="hero-buttons">
                <button className="primary-btn">Apply Now</button>
                <button className="secondary-btn">Learn More</button>
            </div>
        </section>
    </>
}