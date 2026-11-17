import time, datetime as dt
from playwright.sync_api import sync_playwright
ONES = {1:'일',2:'이',3:'삼',4:'사',5:'오',6:'육',7:'칠',8:'팔',9:'구'}
DAYW = {
 1:'일',2:'이',3:'삼',4:'사',5:'오',6:'육',7:'칠',8:'팔',9:'구',10:'십',11:'십일',12:'십이',13:'십삼',14:'십사',15:'십오',16:'십육',17:'십칠',18:'십팔',19:'십구',
 20:'이십',21:'이십일',22:'이십이',23:'이십삼',24:'이십사',25:'이십오',26:'이십육',27:'이십칠',28:'이십팔',29:'이십구',30:'삼십',31:'삼십일'}
MON = {1:'일월',2:'이월',3:'삼월',4:'사월',5:'오월',6:'유월',7:'칠월',8:'팔월',9:'구월',10:'시월',11:'십일월',12:'십이월'}
YEAR = {2026:'이천이십육',2028:'이천이십팔',2027:'이천이십칠',2030:'이천삼십',2100:'이천백'}
WD = ['월','화','수','목','금','토','일']  # Python: Monday=0
def expect(d):
    w = WD[d.weekday()]
    return f'{d.month}월 {d.day}일 ({w})', f'{YEAR[d.year]} 년 {MON[d.month]} {DAYW[d.day]} 일 {w}요일'
with sync_playwright() as p:
    b = p.chromium.launch(); pg = b.new_page(viewport={'width': 360, 'height': 640}); pg.clock.install(time=dt.datetime.now())
    errs = []; pg.on('pageerror', lambda e: errs.append(str(e)))
    pg.goto('http://127.0.0.1:8765/moonlight-mart.html'); time.sleep(1)
    today = dt.date.today(); s, f = expect(today)
    print('today shown:', pg.inner_text('#hdrDate'), '| expected', s)
    bad = 0; total = 0; samples = []
    for year in (2026, 2028):
        d = dt.date(year, 1, 1)
        while d.year == year:
            pg.clock.set_fixed_time(dt.datetime(d.year, d.month, d.day, 12)); pg.evaluate("MM.ui.refreshDate()")
            es, ef = expect(d)
            short = pg.inner_text('#hdrDate'); pg.click('#hdrDate'); full = pg.inner_text('#hdrDatePop')
            pg.click('#hdrDate'); closed = pg.locator('#hdrDatePop').count() == 0
            total += 1
            if short != es or full != ef or not closed:
                bad += 1; print('BAD', d, short, full, closed, '| exp', es, ef)
            if (d.month, d.day) in [(1,1),(2,29),(6,6),(10,10),(10,23),(11,11),(12,31)]: samples.append(f'{d}: {short} → {full}')
            d += dt.timedelta(days=1)
    print('days tested:', total, 'bad:', bad); print('\n'.join(samples))
    # outside tap closes
    pg.click('#hdrDate'); pg.mouse.click(200, 400); print('outside tap closes:', pg.locator('#hdrDatePop').count() == 0)
    print('errors:', errs)
    # midnight rollover with a fake clock
    pg2 = b.new_page(viewport={'width': 390, 'height': 640})
    pg2.clock.install(time=dt.datetime(2026, 12, 31, 23, 59, 40))
    pg2.goto('http://127.0.0.1:8765/moonlight-mart.html'); time.sleep(1)
    before = pg2.inner_text('#hdrDate'); pg2.clock.run_for(60000); after = pg2.inner_text('#hdrDate')
    pg2.click('#hdrDate'); print('midnight:', before, '→', after, '| full:', pg2.inner_text('#hdrDatePop'))
    pg2.screenshot(path='date_pop.png', clip={'x':0,'y':0,'width':390,'height':120})
