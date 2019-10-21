<!DOCTYPE html>
<html lang='en'>
    <!-- Begin Head -->
    <head>
        <!-- Basic -->
        <meta charset='UTF-8'>
        <!--<meta http-equiv='X-UA-Compatible' content='IE=edge,chrome=1'>-->
        <meta name='viewport' content='width=device-width,initial-scale=1'>
        <meta name='theme-color' content='[+hexColor]'>
        
        <!-- Description & SEO -->
        <title>Brand Estimate Calculator | Brand & Online MarketingwebsiteTitle</title>
        <meta name='keywords' content='calculator, estimate, brand' />
        <meta name='description' content='Brand Estimate Calculator' />
		<meta name="google-site-verification" content="0uXfkBkaQ1ju3RLebflGpm-dK_dKfZ8q8Mbreu5NmAU" />
		<meta property="twitter:account_id" content="4503599629060458" />
		<meta name="p:domain_verify" content="517452c03835ce7f00fb9f1b4f23b31e"/>
        
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://www.bkreative.net/estimatecalculator' />
        <meta property='og:image' content='images/bkms_fblogo.png' />
        <meta property='og:title' content='Brand Estimate Calculator | Brand & Online MarketingwebsiteTitle' />
        <meta property='og:description' content='Brand Estimate Calculator' />
        <meta property='og:site_name' content='Brand Estimate Calculator | Brand & Online MarketingwebsiteTitle'/>
        
        <meta name='twitter:card' content='summary_large_image'>
        <meta name='twitter:title' content='Brand Estimate Calculator | Brand & Online MarketingwebsiteTitle'>
        <meta name='twitter:description' content='Brand Estimate Calculator'>
        <meta name='twitter:url' content='https://www.bkreative.net/estimatecalculator'>
        <meta name='twitter:site' content='@BKreativeMedia'>
        <meta name='twitter:creator' content='BKreativeMedia'>
        <meta name='twitter:image' content='images/bkms_fblogo.png'>
        
        <!-- Apple Bookmarks -->
        <link href='images/bkms_applelogo.png' rel='apple-touch-icon' />
        <link href='images/bkms_applelogo.png' rel='apple-touch-icon' sizes='76x76' />
        <link href='images/bkms_applelogo.png' rel='apple-touch-icon' sizes='120x120' />
        <link href='images/bkms_applelogo.png' rel='apple-touch-icon' sizes='152x152' />
        <link href='images/bkms_applelogo.png' rel='apple-touch-icon' sizes='180x180' />
        <link href='images/bkms_applelogo.png' rel='icon' sizes='192x192' />
        <link href='images/bkms_applelogo.png' rel='icon' sizes='128x128' />
        <link rel='shortcut icon' href='favicon.ico' type='image/x-icon'>
        
        <!-- PHP Includes -->
        <?php include_once("dynamic/facebooktracking.php"); ?>
	    <?php include_once("dynamic/fbmessengertracking.php"); ?>
        <?php include_once('dynamic/analyticstracking.php'); ?>
    </head>
    <!-- End Head -->
    
    <!-- BODY -->
    <body id="page-top" data-spy="scroll" data-target=".navbar-fixed-top">
        <!-- HEADER -->
        <header id="header" class="affix-top" data-spy="affix" data-offset-top="5">
            <nav class="navbar navbar-default navbar-transparent navbar-fixed-top">
                <div class="container">
                    <div class="header_main">
                        <div class="logo">
                            <a href="#index"><img src="images/logo.jpg" class="img-responsive" alt="BKreative Media Solutions Header Logo"/></a>
                        </div>
                        <div class="header_right">
                            <div class="call_top"><a href="tel:8035308110"><span>803.530.8110</span></a></div>
                            <div class="nav">
                                <div class="nav_main">
                                    <div class="nav_bg">
                                        <div class="in_bg"></div> 
                                    </div>
                                    <ul class="navbar-nav navbar-right">
                                        <!--li class="has-sub active">
                                            <a class="page-scroll" href="."><< BACK TO MAIN PAGE</a>
                                        </li-->
                                    </ul>
                                </div>
                            </div>
                            <div class="res_navigation">
                                <a href="javascript:void(0)" class="nav-toggle" id="trigger-overlay">
                                    <span class="top"></span>
                                    <span class="middle"></span>
                                    <span class="bottom"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav> 
        </header>
        <!-- !END HEADER -->
        
        <!-- SECTION -->
        <section>
            <div class="full-height-bg" id="estimator">
                <div class="container title">
                    <h2>BRANDING ESTIMATE <span class="pink">CALCULATOR</span></h2>
                    <span class="desc">The Branding Estimate Calculator was created to help potential clients understand their <strong>digital branding cost.</strong></span>
                </div>
                <div id="options" class="container options">
                    <p id="question" class="question">Q1. What type of branding service are you looking for?</p>
                    <input type="radio" id="first_option" name="options">
                    <label for="first_option" class="option_con target">
                        <img src="" alt="">
                        <p class="answer">Answer Choice #1</p>
                        <p>Answer Choice Description #1</p>
                    </label>
                    <input type="radio" id="second_option" name="options">
                    <label for="second_option" class="option_con target">
                        <img src="" alt="">
                        <p class="answer">Answer Choice #2</p>
                        <p>Answer Choice Description #2</p>
                    </label>
                    <input type="radio" id="third_option" name="options">
                    <label for="third_option" class="option_con target">
                        <img src="" alt="">
                        <p class="answer">Answer Choice #3</p>
                        <p>Answer Choice Description #3</p>
                    </label>
                    <input type="radio" id="fourth_option" name="options">
                    <label for="fourth_option" class="option_con target" style="display: none;">
                        <img src="" alt="">
                        <p class="answer">Answer Choice #4</p>
                        <p>Answer Choice Description #4</p>
                    </label>
                </div>
                <div class="container totalprice">
                    <div class="price right">Estimated Cost: $<span id="price" class="pink">0.00</span></div>
                </div>
                <div class="container buttons">
                    <button id="previous_btn" class="button left disabled" disabled onClick="previousQuestion();">◄ Back</button>
                    <button id="next_btn" class="button right active" onClick="nextQuestion();">Next ►</button>
                </div>
            </div> 
        </section>
        <!-- !END SECTION -->
        
        <!-- FOOTER -->
        <footer>
            <div class="CopyRightWrap">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-xs-12">
                            <div class="Copy"><img alt='BKreative Media Solutions Copyright Logo' src="images/copy-right-logo.png">© 2010-19 <span>BKreative Media Solutions, LLC</span>. All Rights Reserved.</div>
                            <a href="documents/bkreativeprivacy.pdf" target="_blank" class="right">Privacy Policy</a>
                        </div>
                    </div>
                </div>
            </div>
            <a href="javascript:void(0);" class="s-back-to-top js__back-to-top">
                <img alt='Image of Back to Top Arrow' src="images/Up_arrow.svg"/>
            </a>
        </footer>
        <!-- !END FOOTER -->
        
        <!-- Web Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i&amp;subset=latin-ext" rel="stylesheet">

        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

        <link href="css/animate.css" rel="stylesheet" type="text/css"/>
        <link href="css/fonts.css" rel="stylesheet" type="text/css"/>
        <link href="css/style.min.css" rel="stylesheet" type="text/css"/>
        <link href="css/responsive.min.css" rel="stylesheet" type="text/css"/>
        <link href="css/hack.css" rel="stylesheet" type="text/css"/>
        <link href="css/estimator.css" rel="stylesheet" type="text/css"/>
        
        <!-- JavScript -->
        <script src="js/estimator.js"></script> 
        <script src="js/wow.js"></script>
        <script>
            new WOW().init();
        </script>
    </body>
    <!-- !END BODY -->
</html>