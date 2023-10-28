import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import './styling.css';

interface GithubFileViewerProps {
  region: string;
}

export const GithubFileViewer: React.FC<GithubFileViewerProps> = ({ region }) => {
  const [content, setContent] = useState<string>("");
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const url = `https://api.github.com/repos/ValveSoftware/counter-strike/contents/regional_standings/standings_${region}.md`;

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        const decodedContent = atob(data.content);
        setContent(decodedContent);
      })
      .catch(err => setError(err));
  }, [region]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="markdownContainer">
      <ReactMarkdown remarkPlugins={[gfm]}>{content}</ReactMarkdown>
    </div>
  );
};
