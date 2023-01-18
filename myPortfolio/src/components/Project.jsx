import "../App.css";

function Project() {
  return (
    <div className="projects">
        <section className="title">
            <h1 className="fav">Here are a few of my favorite projects.</h1>
            <div className="line"></div>
        </section>

        <section>
            <div>
                <img src="" alt="" />
                <div>
                    <h3>React Emoji Search</h3>
                    <div>
                        <img src="" alt="" />
                        <img src="" alt="" />
                    </div>
                </div>
                <p>1800+ emojis at your fingertips. Ready-to-use with just a simple copy + paste</p>
                <div>
                    <div>React</div>
                    <div>CSS</div>
                    <div>JSON</div>
                </div>
            </div>
        </section>
        
        <button>View All</button>
    </div>
  )
}

export default Project