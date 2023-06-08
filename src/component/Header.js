export default function Header (prop) {
    const text = prop.text || ""
    return (
        <header>
            <h2>Reasons I'm excited to learn React</h2>
              <>
                <li>It's a popular library, so I'll be able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer if I know React</li>
              </>
            <h1>Fun Facts About React</h1>
              <ul>
                <li>Was first released in 2013 </li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Power thousands of enterprise apps, including mobile apps.</li>
                <div className="space">.</div>
              </ul>
              
        </header>
        
    )
}