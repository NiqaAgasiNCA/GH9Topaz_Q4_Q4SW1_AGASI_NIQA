// Drill 2 
function compute_heatindex() {
    let heat_index = (document.getElementById("heat_index").value);
    switch (true) {
        case (heat_index <= 27):
            window.alert('Comfortable/cool'); 
            break;
        case (heat_index >= 28 && heat_index <= 32):
            window.alert('Warm');
            break;
        case (heat_index > 32 && heat_index <= 37 ):
            window.alert('Hot');
            break;
        case (heat_index > 38 && heat_index <= 41):
            window.alert('Very Hot');
            break;
        case (heat_index > 42):
            window.alert('Extreme Heat/Danger');
            break;
        
}
}