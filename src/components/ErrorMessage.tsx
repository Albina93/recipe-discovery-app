interface ErrorMessageProps {
  message: string;
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div
      style={{
        padding: "1rem",
        margin: "1rem",
        backgroundColor: "#fee",
        border: "1px solid #fcc",
        borderRadius: "4px",
        color: "#900",
      }}
    >
      <strong>Error:</strong> {message}
    </div>
  );
}
