namespace ArangoDBClient;

class VertexHandler extends DocumentHandler
{
    public function createFromArrayWithContext(data, options) -> <Document>
    {
        return Vertex::createFromArray(data, options);
    }

}
