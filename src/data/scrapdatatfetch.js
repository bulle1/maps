useEffect(() => {

    axios.get('https://us-central1-drivoolapis.cloudfunctions.net/getTrace?gapn=giridhar@apeironmobilitycom&key=-MDtr1gS16VB94bIweQj&date=08042020&route=giridhar@apeironmobilitycom_v001')
        .then(res => {
          setData(JSON.stringify(res.data));
      })
        .catch(err => {
            console.log(err)
        });
  }, []);
  console.log(data);