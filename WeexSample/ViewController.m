//
//  ViewController.m
//  WeexSample
//
//  Created by zifan.zx on 6/12/16.
//  Copyright © 2016 com.taobao.weex. All rights reserved.
//

#import "ViewController.h"
#import <WeexSDK/WXSDKInstance.h>

@interface ViewController ()

@property (nonatomic, strong) WXSDKInstance *instance;
@property (nonatomic, strong) UIView *weexView;
@property (nonatomic, assign) CGFloat weexHeight;
@property (nonatomic, assign) CGFloat top;

@end

@implementation ViewController

- (void)viewDidLoad
{
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.
    
    [self.navigationController.navigationBar setHidden:YES];
    if (!self.navigationController.navigationBar.hidden) {
        _top = CGRectGetMaxY(self.navigationController.navigationBar.frame);
    } else{
        _top = CGRectGetMaxY([[UIApplication sharedApplication]statusBarFrame]);
    }
    _weexHeight = self.view.frame.size.height - _top;
    [self render];
}

- (void)dealloc
{
    [_instance destroyInstance];
}

- (void)render
{
    _instance = [[WXSDKInstance alloc] init];
    _instance.viewController = self;
    CGFloat width = self.view.frame.size.width;
    _instance.frame = CGRectMake(self.view.frame.size.width-width,_top, width, _weexHeight);
    
    __weak typeof(self) weakSelf = self;
    _instance.onCreate = ^(UIView *view) {
        [weakSelf.weexView removeFromSuperview];
        weakSelf.weexView = view;
        [weakSelf.view addSubview:weakSelf.weexView];
        UIAccessibilityPostNotification(UIAccessibilityScreenChangedNotification, weakSelf.weexView);
    };
    _instance.onFailed = ^(NSError *error) {
        NSLog(@"failed %@",error);
    };
    
    _instance.renderFinish = ^(UIView *view) {
        NSLog(@"render finish");
    };
    
    _instance.updateFinish = ^(UIView *view) {
        NSLog(@"update Finish");
    };
    [_instance renderWithURL:_url options:@{@"bundleUrl": [NSString stringWithFormat:@"file://%@/bundlejs/",[NSBundle mainBundle].bundlePath]} data:nil];
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end
