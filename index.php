<?php
include('elements/header.php');
?>


<body class="">


<?php 
include('elements/navbar.php');
?>

<main class="container-fluid p-0">

<!-- COVER -->
<div class="cover-container d-flex h-100 mx-auto flex-column">
      <div role="main" class="inner cover banner text-center">
      <div class="container">
        <h1 class="cover-heading">VI SKABER SUCCESS MED DIN <br><span class="highlight">HJEMMESIDE</span></h1>
        </div>
    </div>
</div>




<div id="hjemmesider" class="container d-flex flex-column text-center justify-content-center">

    <div class="mb-2 mt-5">
        <h2 class="">Vi tilbyder</h2>
    </div>

</div>


<div id="" class="mt-5">
<?php
include('elements/hjemmeside-udvikling.php');
?>
</div>

<div id="grafiskdesign" class="py-5 ">
<?php
include('elements/grafisk_design.php');
?>

<div class="container-fluid position-relative p-0" style="height:100px">

<img src="images/pc.png" alt="" style="width:100%;height:700px;position:absolute;top:-250px;z-index:-1;object-fit:cover;">

</div>

</div>
<div id="seo" class="py-5">
<?php
include('elements/seo.php');
?>
</div>

<div id="omos">
<?php 
include('elements/omos.php');
?>
</div>

<?php
include('elements/footer.php');
?>

<script src="javascript.js"></script>