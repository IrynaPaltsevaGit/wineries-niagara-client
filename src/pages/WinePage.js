import React from 'react'

export default function WinePage({wineries}) {


    const { wineryId } = useParams();
    const [selectedWinery, setSelectedWinery] = useState(null);
    
    useEffect(() => {
            let selectedWineryId = wineryId;
            handleSelectedVideo(selectedWineryId);
        
    }, [videos, videoId]);

    async function handleSelectedWinery(selectedWineryId) {
        const wineryDetails = await axios.get(`http://localhost:8080/wineries`);
        setSelectedVideo(wineryDetails.data)
    }


  return (
    <div>WinePage</div>
  )
}
