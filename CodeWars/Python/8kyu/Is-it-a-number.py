#    Given a string s, write a method (function) that will return true if its a valid single integer or floating number or false if its not.
#    Solution by TribalK

def isDigit(string):
    try:
        newstr = float(string)
    except:
        return False

    return True
