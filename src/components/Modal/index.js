import React from "react";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function ModalCommands() 
{
  return (
    $(document).ready(function() 
    {
      var modal = $("#myModal");

      //listerner and fuction for opening the modal
      $(".openModal").on("click", openModal);
      function openModal ()
      {modal.css("display", "block")};

      //listerner and fuction for closing the modal
      $("#closeModal").on("click", closeModel);
      function closeModel ()
      {modal.css("display", "none");location.reload()};
    }
  ));
}

export default ModalCommands;
