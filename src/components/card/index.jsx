import { Button, Card, Container } from 'react-bootstrap';
import { RiGithubFill } from 'react-icons/ri';

export function CustomCard({ onClick, middle, cardType, item: { header, text, link, image, repo } }) {
  return (
    // @ts-ignore
    <Card onClick={onClick} bg="dark" id={cardType} className={`${middle ? 'mainCard' : ''}`}>
      <Card.Img variant="top" src={image} />
      {link !== 'privado' && (
        <Container className="d-none repo-hidden">
          <a href={repo || '/'} target="_blank" rel="noreferrer">
            <RiGithubFill size={50} fill="#0a66c2" />
          </a>
        </Container>
      )}
      <Card.Body>
        <Card.Title className="title">{header}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button disabled={link === 'privado'} variant="primary">
          <a className="text-decoration-none" href={link} target="_blank" rel="noreferrer">
            {link === 'privado' ? 'Privado' : 'Ver Projeto'}
          </a>
        </Button>
      </Card.Body>
    </Card>
  );
}
