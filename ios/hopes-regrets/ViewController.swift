//
//  ViewController.swift
//  hopes regrets
//
//  Created by oytuneren on 16.11.2014.
//  Copyright (c) 2014 oytuneren. All rights reserved.
//

import UIKit
import WebKit

class ViewController: UIViewController {
    
    @IBOutlet var containerView : UIView! = nil
    var webView: WKWebView?
    
    override func loadView() {
        super.loadView()
        
        self.webView = WKWebView()
        self.view = self.webView!
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        var url = NSURL(string:"http://hack-ing.bcinarli.com/")
        var req = NSURLRequest(URL:url)
        self.webView!.loadRequest(req)
        UIApplication.sharedApplication().openURL(NSURL(string: "http://www.infomine.com/commodities/"))
    }
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    
}
