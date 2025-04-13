'use client'

import AnimatedText from "../common/AnimatedText"

export default function About() {
  return (
    <section id="about" className="min-h-screen w-full flex items-center justify-center p-8">
      <div className="max-w-2xl space-y-12">
        <AnimatedText>
          <h1 className="text-4xl font-bold mb-8">About Me</h1>
        </AnimatedText>

        <div className="space-y-8">
          <AnimatedText>
            <div className="space-y-4">
              <p className="text-lg text-foreground/80 leading-relaxed">
              Hi! I'm Alka, a B.Tech student in Electronics and Communication Engineering at IGDTUW, Delhi. I'm passionate about software development and have strong problem-solving skills in C++.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
              I’ve worked with technologies like HTML, CSS, JavaScript, React, Node.js, Express.js, and MongoDB. My project experience includes a Voting App (backend-focused), a K-drama suggestion website, and a PG Life frontend website. I’ve also contributed to open source through GSSoC and participated in national-level challenges like Flipkart Grid and Tata Imagination Challenge.
              </p>
            </div>
          </AnimatedText>

          {/* <AnimatedText>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Personal Interests</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                In this section, you can share your personal interests and hobbies. This content can make your profile more vibrant and showcase your unique personality traits.
              </p>
            </div>
          </AnimatedText> */}

          <AnimatedText>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Career Goals</h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
              I aim to build a strong career as a Software Development Engineer, where I can apply my skills in full-stack development and problem-solving to create impactful tech solutions. I'm looking for opportunities that allow me to work on real-world projects, learn from experienced professionals, and grow in a collaborative environment. In the long term, I aspire to contribute to innovative products that make a meaningful difference in people's lives.
              </p>
            </div>
          </AnimatedText>
        </div>
      </div>
    </section>
  )
}