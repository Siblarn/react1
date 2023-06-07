export default function Header (prop) {
    const text = prop.text || ""
    return (
        <header>
            <h2>Reasons I'm excited to learn React</h2>
              <ol>
                <li>It's a popular library, so I'll be able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer if I know React</li>
              </ol>
        </header>
        
    )
}