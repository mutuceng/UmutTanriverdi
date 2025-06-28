interface Props {
  name: string;
  title: string;
  description: string;
}

export const AboutHeader = ({ name, title, description }: Props) => (
  <div className="mb-10">
    <h3 className="text-2xl font-semibold text-white mb-4">{name}</h3>
    <p className="text-fuchsia-300 font-mono mb-4">{title}</p>
    <p className="text-sm whitespace-pre-wrap text-gray-300">{description}</p>
  </div>
);