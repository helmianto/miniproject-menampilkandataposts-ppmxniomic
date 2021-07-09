import 'semantic-ui-css/semantic.min.css';
import { Card } from 'semantic-ui-react';

const PostComponent = ({ data }) => {
    return (
        <Card.Group>
            <Card fluid>
                <Card.Content>
                    <Card.Header>{ data.title }</Card.Header>
                    {/* <Card.Meta>{ data.tanggal} - { data.waktu }</Card.Meta> */}
                    <Card.Description>
                    { data.body }
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>

                </Card.Content>
            </Card>
        </Card.Group>
    );
}

export default PostComponent;