#imports sleep function and PRAW, a package that manages the reddit API via python
import praw
from time import sleep
#uses PRAW to log into a reddit account
r = praw.Reddit(client_id='SASQjg-CXDy8-g',
                client_secret='JdnLCd1DwsISCtb_yOASwoCqXG8',
                password='jacksucks420',
                username='WednesdayBot_1',
                user_agent='Nice.')
#prints "logged in" after completing the login, and only if the login is complete
print("logged in")

#creates an empty cache to store comment id's so that the script doesn't respond to the same comment twice in one run
cache = []
#sets Wednesday as a blank variable
Wednesday = set()
#sets a loop
for i in range(0,10):
  #tells the bot what subreddit to scan
    subreddit = r.subreddit('BackToSchoolDeals')
    #tells the bot how many comments it can look at
    comments = subreddit.comments(limit = 20)
    #starts the comment process
    for comment in comments:
      #declares "body" as the body of the comments
        body = comment.body.lower()
        #if the bot finds "Monday" in the comments, and doesn't find the unique comment ID in the cache I created at the beggining,
        #it responds with a phrase, adds the comment ID to the cache, and relays that that day is done
        if ("monday" in body) and (comment.id not in cache):
            comment.reply("Not Good")
            cache.append(comment.id)
            print("Monday = Done")
    #repeats the first section for every day of the week
    subreddit = r.subreddit('BackToSchoolDeals')
    comments = subreddit.comments(limit = 20)
    for comment in comments:
        body = comment.body.lower()
        if ("tuesday" in body) and (comment.id not in cache):
            comment.reply("Okay")
            cache.append(comment.id)
            print("Tuesday = Done")
    subreddit = r.subreddit('BackToSchoolDeals')
    comments = subreddit.comments(limit = 20)
    for comment in comments:
        body = comment.body.lower()
        if ("wednesday" in body) and (comment.id not in cache):
            comment.reply("My Dudes")
            cache.append(comment.id)
            print("Wednesday = Done")
    subreddit = r.subreddit('BackToSchoolDeals')
    comments = subreddit.comments(limit = 20)
    for comment in comments:
        body = comment.body.lower()
        if ("thursday" in body) and (comment.id not in cache):
            comment.reply("Mediocre")
            cache.append(comment.id)
            print("Thursday = Done")
    subreddit = r.subreddit('BackToSchoolDeals')
    comments = subreddit.comments(limit = 20)
    for comment in comments:
        body = comment.body.lower()
        if ("friday" in body) and (comment.id not in cache):
            comment.reply("Great")
            cache.append(comment.id)
            print("Friday = Done")
    subreddit = r.subreddit('BackToSchoolDeals')
    comments = subreddit.comments(limit = 20)
    for comment in comments:
        body = comment.body.lower()
        if ("saturday" in body) and (comment.id not in cache):
            comment.reply("The Best")
            cache.append(comment.id)
            print("Saturday = Done")
    subreddit = r.subreddit('BackToSchoolDeals')
    comments = subreddit.comments(limit = 20)
    for comment in comments:
        body = comment.body.lower()
        if ("sunday" in body) and (comment.id not in cache):
            comment.reply("Bad")
            cache.append(comment.id)
            print("Sunday = Done")
    #puts the bot to sleep for 25 seconds before being able to run away  
    sleep(25)
        
