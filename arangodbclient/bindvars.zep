namespace ArangoDBClient;

class BindVars
{
    protected _values = [];
    public function getAll() -> array
    {
        return this->_values;
    }
    
    public function getCount() -> int
    {
        return count(this->_values);
    }
    
    public function set(name, var value = null)
    {
        if is_array(name) {
            for value in name {
                ValueValidator::validate(value);
            }
            let this->_values = name;
        } else {
            if is_int(name) || is_string(name) {
                let this->_values[(string) name] = value;
                ValueValidator::validate(value);
            } else {
                throw new ClientException("Bind variable name should be string or int");
            }
        }
    }
    
    public function get(string name)
    {
        if !array_key_exists(name, this->_values) {
            return null;
        }
        return this->_values[name];
    }

}
