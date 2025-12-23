import "./Features.css"

export default function Features() {
    return <>
        <section className="features-section">
            <h2 className="features-title">Why Choose Us</h2>

            <div className="features">
                <div className="card">
                    <h3>Real Projects</h3>
                    <p>Work on live industry-level projects to gain practical experience.</p>
                </div>

                <div className="card">
                    <h3>Mentorship</h3>
                    <p>Learn from experienced developers and get guided support.</p>
                </div>

                <div className="card">
                    <h3>Certificate</h3>
                    <p>Receive an internship certificate after successful completion.</p>
                </div>
            </div>
        </section>
    </>
}