/* global AFRAME, THREE */
if (typeof AFRAME === 'undefined') {
  throw new Error('Component attempted to register before AFRAME was available.');
}


var campus = {
  buildings: [
    {
      id: "e14",
      name: "E14",
      description: "Located here: Media Lab, Program in Media Arts and Sciences, Jerome Lemelson Center for Inventive Thinking, Center for Bits and Atoms (Workshops), Program in Art, Culture and Technology, Norman B. Leventhal Center for Advanced Urbanism (LCAU). Address: 75 Amherst Street",
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
        },
        {
          id: "e14_f3",
          name: "Floor 3",
          description: "Floor 3 text",
          rooms: [
            {
              id: "301",
              name: "Room 301",  
              description: "Room 301 text",
              isSelected: false
            }        
      
          ]
        },
        {
          id: "e14_f4",
          name: "Floor 4",
          description: "Floor 4 text",
          rooms: [
            {
              id: "401",
              name: "Room 401",  
              description: "Room 401 text",
              isSelected: false
            }        
      
          ]
        },
        {
          id: "e14_f5",
          name: "Floor 5",
          description: "Floor 5 text",
          rooms: [
            {
              id: "501",
              name: "Room 501",  
              description: "Room 501 text",
              isSelected: false
            }        
      
          ]
        },
        {
          id: "e14_f6",
          name: "Floor 6",
          description: "Floor 6 text",
          rooms: [
            {
              id: "501",
              name: "Room 601",  
              description: "Room 601 text",
              isSelected: false
            }        
      
          ]
        }
      
      ]
    },
    {
      id: "e15",
      name: "Wiesner Building (E15)",
      description: "Located here: Bartos Theater, Office of the Arts, Media Lab, Center for Bits and Atoms (Offices, Labs), Program in Art, Culture and Technology, Comparative Media Studies/Writing (CMS/W), Program in Media Arts and Sciences, Music, Mind and Machine, List Visual Arts Center, Media Arts and Sciences Freshman Program. Address:  20 Ames St, Cambridge, MA 02139",
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
    },
    {
      id: "e17",
      name: "Mudd Building (E17)",
      description: "Located here: IS&T Service Desk, Atlas Service Center, Parking and Transportation, MIT ID Card Services, Atlas Service Center, Technology, Management and Policy Program (TPP), Human Genomics Laboratory, Career Advising & Professional Development, Global Education, Study Abroad and Distinguished Fellowships, Systems Engineering Advancement Research Initiative. Address: 40 Ames St, Cambridge, MA 02139",
      floors: [
        {
          id: "e17_f1",
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
    },
    {
      id: "e18",
      name: "Ford Building (E18)",
      description: "Located here: International Students Office (ISO), International Scholars Office (ISchO), Institute for Data, Systems, and Society (IDSS), Sociotechnical Systems Research Center, Repair and Maintenance, Writing and Communication Center, Writing, Rhetoric, and Professional Communication (WRAP), Lactation Room (E18-317). Address: 50 Ames St, Cambridge, MA 02139",
      floors: [
        {
          id: "e18_f1",
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
    },
    {
      id: "e19",
      name: "Ford Building (E19)",
      description: "Located here: Office of Leadership Giving, MIT Energy Initiative (MITEI), Center for Energy and Environmental Policy Research (CEEPR), Laboratory For Energy and the Environment (LFEE), Program on the Science and Policy of Global Change, Joint, Knight Science Journalism Fellowships, Community Giving at MIT, Usability Lab, Industrial Performance Center, Quarter Century Club, MIT, Communications and Donor Relations, Communications Initiatives, Reference Publications, Retirees, Association of MIT, Community Services Office, MIT, Telephone Support Services, Center for Biomedical Innovation, Tata Center for Technology and Design, Kuwait-MIT Center for Natural Resources and the Environment, Teaching and Learning Laboratory, Abdul Latif Jameel Poverty Action Lab (J-PAL). Address: 400 Main St, Cambridge, MA 02139",
      floors: [
        {
          id: "e19_f1",
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
    },
    {
      id: "e23",
      name: "E23",
      description: "no description available",
      floors: [
        {
          id: "e23_f1",
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
    },
    {
      id: "e25",
      name: "E25",
      description: "no description available",
      floors: [
        {
          id: "e25_f1",
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
    newBuilding.html('<h1>'+building.name+'</h1><p>'+building.description+'</p>');
    newBuilding.focus(function(){
      var afEl = document.getElementById(building.id+'-block');
      focus(afEl);
    });
    // newBuilding.children().focus(function(){
    //   var afEl = document.getElementById(building.id+'-block');
    //   focus(afEl);
    // });
    var onBuildingSelected = ()=>{
      console.log("test click " + building.id);

      //AFrame Element
      var afEl = document.getElementById(building.id+'-block');
      //focus(afEl);      
      showFloors(building.id);


      $("#campusList").html('');
      building.floors.forEach((floor)=>{
        var newFloor = $('<div/>', {
          id: floor.id+'list',
          tabindex: 1
        });
        

        newFloor.html('<h2>'+floor.name+'</h2><p>'+floor.description+'</p>');
        newFloor.focus(function(){
          var afEl = document.getElementById(floor.id);
          focus(afEl);
        });
        // newFloor.children().focus(function(){
        //   var afEl = document.getElementById(floor.id);
        //   focus(afEl);
        // });
        
        $("#campusList").append(newFloor);
        
        var onFloorSelected = ()=>{
          console.log("floor click " + floor.id);


          $("#campusList").html('');
          floor.rooms.forEach((room)=>{
            var newRoom = $('<div/>', {
              id: room.id+'list',
              tabindex: 1
            });
            newRoom.html('<h2>'+room.name+'</h2><p>'+room.description+'</p>');

            $("#campusList").append(newRoom);         
          });
          var backBtn = $('<div/>', {
              tabindex: 1
            });
          backBtn.html('<em>Back to all floors of '+ building.name+'</em>');  
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
      backBuildingBtn.html('<em>Back to all buildings</em>');  
      backBuildingBtn.click(()=>showBuildingsList());
      addKeyHandler(backBuildingBtn, showBuildingsList);

      //AFrame Element
      $("#campusList").append(backBuildingBtn);
    };

    newBuilding.click(onBuildingSelected);
    showBlock(building.id);

    addKeyHandler(newBuilding, onBuildingSelected);
    $("#campusList").append(newBuilding);
  })
}








var currentView = "orb";
var gotoView = "Switch to Room View";



function clickSwitch() {
  console.log("click switch to " + currentView );

  var orbCam = $("#orbCam");
  var roomCam = $("#roomCam");


  if (currentView === "orb") {
      currentView = "room";
      gotoView = "Switch to Room View";

      console.log("viewing room");

      var orbCam = document.querySelector('#orbCam');
      orbCam.setAttribute('camera', 'active', false);

      var roomCam = document.querySelector('#roomCam');
      roomCam.setAttribute('camera', 'active', true);

  } else {
      currentView = "orb";
      gotoView = "Switch to Birds Eye View";

      console.log("viewing orb");


      var orbCam = document.querySelector('#orbCam');
      orbCam.setAttribute('camera', 'active', true);

      var roomCam = document.querySelector('#roomCam');
      roomCam.setAttribute('camera', 'active', false);

  }
  $("#view-switch").html(gotoView);
}




$(function() {
    console.log( "ready!" );
    showBuildingsList();

    $("#view-switch").html(gotoView);
});


AFRAME.registerComponent('custom-component', {
  init: function () {
    var targetEl = this.el;    
  }
});

function blurAll() {
    document.querySelectorAll('a-entity[clickable]').forEach((element)=>{
      element.setAttribute("svg","overrideColor:#000; opacity:0.45;");
    });  
}

function focus(element) {
    console.log("we are focussed");
    blurAll();
    element.setAttribute("svg","overrideColor:#00F; opacity:0.8;");
}


function hideRooms() {
    document.querySelectorAll('a-entity[clickable]').forEach((element)=>{
      element.setAttribute("svg","overrideColor:#000; opacity:0.45;");
    });  
}

function showRooms(element) {
    hideRooms()
    element.setAttribute("svg","overrideColor:#00F; opacity:0.8;");
}


function showFloors(id) {
  var afElBlock = document.getElementById(id+'-block');
  var afElFloors = document.getElementById(id+'-floors');
  afElBlock.setAttribute("visible","false"); 
  afElFloors.setAttribute("visible","true");
}

function showBlock(id) {
  var afElBlock = document.getElementById(id+'-block');
  var afElFloors = document.getElementById(id+'-floors');
  afElBlock.setAttribute("visible","true"); 
  afElFloors.setAttribute("visible","false");
}


function deselect() {
    document.querySelectorAll('a-entity[selectable]').forEach((element)=>{
      element.setAttribute("svg","overrideColor:#000; opacity:0.45;");
    });  
}

function select(element) {
    element.setAttribute("svg","overrideColor:#f00; opacity:0.8;");
}



AFRAME.registerComponent('clickable', {
    schema: {
    },
    init: function () {
        var _this = this;
        var data = this.data;
        var el = this.el;
        el.addEventListener('click', function (evt) {
          console.log('I was clicked at: ', evt.detail.intersection.point);
          console.dir(el);
          focus(el);
          // el.setAttribute("svg","overrideColor:#f00;opacity:0.8;");
        });

    }
});

