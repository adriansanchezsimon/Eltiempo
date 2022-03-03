import { useEffect, useState } from 'react';
import axios from 'axios';
import './style/Input.css';

const Input = ({ changeDistrito }) => {
    const [data, setData] = useState([]);
    const [query, setQuery] = useState('');
    const [distritos, setDistritos] = useState([]);

    useEffect(() => {
        const filterNames = fetchedData => {
            let search = query.charAt(0).toUpperCase() + query.slice(1);
            setDistritos(fetchedData.filter(district => district.name.startsWith(search)));
        };
        filterNames(data);
    }, [query]);

    useEffect(() => {
        const fetchDistritos = async () => {
            const res = await axios.get('https://api.ipma.pt/open-data/distrits-islands.json');
            const { data } = res.data;
            setData(data.map(dist => ({ id: dist.globalIdLocal, name: dist.local })));
        }
        fetchDistritos();
    }, []);
    
    return (
        <div className="Input">
            <label>Ponga cualquier lugar de Portugal🔍
            <input 
                value={query}
                type="search"
                autoFocus
                onChange={e => setQuery(e.target.value)}
            />
            </label>
            <div className="AutocompleteBox">
            {distritos.map(item => {
                if (query) {
                    return (
                        <button 
                            className="AutocompleteBtn" 
                            key={item.id}
                            onClick={() => {
                                changeDistrito(item); 
                                setQuery('')
                            }}
                        >
                            {item.name}
                        </button>
                    )
                }
            })}
            </div>
        </div>
    );   
};

export default Input;
