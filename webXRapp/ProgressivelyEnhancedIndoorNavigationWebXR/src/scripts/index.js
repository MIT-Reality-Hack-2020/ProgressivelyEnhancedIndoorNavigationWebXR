import '../styles/index.scss';

var campus = {
  buildings: [
    {
      id: "e14",
      name: "e14",
      description: "E14 text",
      floors: [
        {
          id: "e14_f1",
          name: "Floor 1",
          description: "Floor 1 text",
          rooms: [
            {
              id: "101",
              name: "Room 101",  
              description: "Room 101 text",
              isSelected: false
            }        
      
          ]
        },
        {
          id: "e14_f2",
          name: "Floor 2",
          description: "Floor 2 text",
          rooms: [
            {
              id: "201",
              name: "Room 201",  
              description: "Room 201 text",
              isSelected: false
            }        
      
          ]
        }
      
      ]
    },
    {
      id: "e15",
      name: "e15",
      description: "E15 text",
      floors: [
        {
          id: "e15_f1",
          name: "Floor 1",
          description: "Floor 1 text",
          rooms: [
            {
              id: "101",
              name: "Room 101",  
              description: "Room 101 text",
              isSelected: false
            }        
      
          ]
        }
      
      ]
    }

  ]
  // e15:
  // e17:
  // e18:
  // e19:
  // e23:
  // e25:  
};

function addKeyHandler(el, callback){
  el.keydown(function(event){ 
    var keyCode = (event.keyCode ? event.keyCode : event.which); 
    if (keyCode == 13) { //EnterKey
      callback();
    }
  });
}


function showBuildingsList(){
  $("#campusList").html('');
  campus.buildings.forEach((building)=>{
    var newBuilding = $('<div/>', {
      id: building.id+'list',
      tabindex: 1
    });
    newBuilding.html(building.description);
    var onBuildingSelected = ()=>{
      console.log("test click " + building.id);
      $("#campusList").html('');
      building.floors.forEach((floor)=>{
        var newFloor = $('<div/>', {
          id: floor.id+'list',
          tabindex: 1
        });
        newFloor.html(floor.description);
        $("#campusList").append(newFloor);
        
        var onFloorSelected = ()=>{
          console.log("floor click");
          $("#campusList").html('');
          floor.rooms.forEach((room)=>{
            var newRoom = $('<div/>', {
              id: room.id+'list',
              tabindex: 1
            });
            newRoom.html(room.description);
            $("#campusList").append(newRoom);         
          });
          var backBtn = $('<div/>', {
              tabindex: 1
            });
          backBtn.html('Back to all floors of '+ building.name);  
          backBtn.click(()=>onBuildingSelected());
          addKeyHandler(backBtn, onBuildingSelected);
          $("#campusList").append(backBtn);
          
        };
        newFloor.click(onFloorSelected);
        addKeyHandler(newFloor, onFloorSelected);
        $("#campusList").append(newFloor);
      });
      var backBuildingBtn = $('<div/>', {
          tabindex: 1
      });
      backBuildingBtn.html('Back to all buildings');  
      backBuildingBtn.click(()=>showBuildingsList());
      addKeyHandler(backBuildingBtn, showBuildingsList);
      $("#campusList").append(backBuildingBtn);
    };

    newBuilding.click(onBuildingSelected);
    addKeyHandler(newBuilding, onBuildingSelected);
    $("#campusList").append(newBuilding);
  })
}

$(function() {
    console.log( "ready!" );
    showBuildingsList();
});